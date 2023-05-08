
//______________________________Inkluderer biblioteker_______________
#include <Adafruit_SSD1306.h> //bibilotek
#include <Adafruit_GFX.h> //bibilotek
#include <Wire.h> //bibilotek
#define Skjerm_hoyde 64 //skjermhøyde
#define Skjerm_bredde 128 //skjermbredde
Adafruit_SSD1306 oled (Skjerm_bredde,Skjerm_hoyde, &Wire,-1); //Valg av skjermtype
//______________________Defineringer_______________________________
int sensorInterrupt = 0; 
int sensorPin = 2; 
float calibrationFactor = 6; //kalibrasjonsfaktor målingnen blir delt på
volatile byte pulseCount=0; 

float flowrate =0.0; 
unsigned int flowMilliLitres =0; 
unsigned long totalMilliLitres =0; 
unsigned long oldTime= 0;
//----------------------------------------------------------------
int resetBtn =  5; //reset knapp mellom hver måling koplet på utgang 5
int RESETBtn;
float total_liter=0;
bool literBool=false;

void setup() 
  {
    Serial.begin(9600); //starte serial monitoren
    if(!oled.begin(SSD1306_SWITCHCAPVCC,0x3C)) //skriver ut Error hvis noe skulle være galt med skjermen
       {
         Serial.println(String("Error"));
         while (true);
       }

            delay(2000);// venter to sekunder for at skjermen skal gjøre seg klar
            oled.clearDisplay(),oled.setTextColor(WHITE),oled.setTextSize(2),oled.setCursor(30,30),oled.println("Starter"),oled.display();// fjerner det som evt står på skjermen. velger hvor skriften skal være, størrelse også skrive STARTER når den starter opp
            delay(2000);// venter to sekunder 
            pinMode(sensorPin, INPUT); // definerer variabelen sensorpin som en input fra mikrokontrolleren
            digitalWrite (sensorPin, HIGH); //Setter utgangsspenningen høy fra oppstart
            attachInterrupt(sensorInterrupt,pulseCounter,FALLING); //definerer interupt pin, kaller på funksjonen "Pulsecounter" når interupt pinnen går fra et høyt til et lavt signal 

            pinMode(resetBtn,INPUT_PULLUP);   
  }


void loop()
  {
    RESETBtn=digitalRead(resetBtn);//setter ny variabel på reset knapp
    
     if (totalMilliLitres>1000) // Setter opp variabel for når totale mengden vann målt overstiger 1liter
{
  literBool=true;
}

else
{
  literBool=false;
}
  if (literBool==false) //dersom mengden målt ikker er over 1liter skrives det ut mililiter
  {     
    oled.clearDisplay(),oled.setCursor(20, 10),oled.setTextSize(1),oled.println("Antall liter"),oled.setCursor(30,30),oled.setTextSize(2),oled.println(String(totalMilliLitres)+String("mL")),oled.display(); //velger hvor skriften skal være, størrelse også skrive ANTALL LITER + hvor mye som går gjennom sensoren
  }
  if((millis()-oldTime)>1000)// setter opp hvor ofte koden skal regne ut mengde vann målt, benytter 1000ms
    {
      detachInterrupt(sensorInterrupt); //detacher interupt pin mens det utgjøres kalkulasjoner slik at kalkulasjonene ikke blir interuptet mens noe utregnes

      flowrate=(1000.0/(millis()-oldTime))*pulseCount/calibrationFactor; //utregner flowrate
      oldTime=millis();

      flowMilliLitres=((flowrate/60)*1000);
      totalMilliLitres += flowMilliLitres; // utregner total mengde målt

      pulseCount = 0;

      attachInterrupt(sensorInterrupt, pulseCounter, FALLING); //atacher interupt pin slik at den er aktiv igjen
    } 
  

  if(RESETBtn==LOW) //dersom knapp blir trykket på, resettes total mengde vann målt
    {
      totalMilliLitres=0;
    }
   

  if (totalMilliLitres>1000) //Dersom vannmende overstiger 1liter skrives det ut mengde i liter på oled
    {
      delay(10);      
      total_liter=totalMilliLitres/1000.0;
      Serial.println(String(total_liter)+String("L"));
      oled.clearDisplay(),oled.setCursor(20, 10),oled.setTextSize(1),oled.println("Antall liter"),oled.setCursor(30,30),oled.setTextSize(2),oled.println(String(total_liter)+String("L")),oled.display();
      Serial.println(total_liter);
    }
    else 
      {
      oled.clearDisplay(),oled.setCursor(20, 10),oled.setTextSize(1),oled.println("Antall liter"),oled.setCursor(30,30),oled.setTextSize(2),oled.println(String(totalMilliLitres)+String("mL")),oled.display();
      }

 }
void pulseCounter()//funksjon for interupt pin som plusser på 1 for hver gang den bli kallt på
   {
       pulseCount++;
   }

