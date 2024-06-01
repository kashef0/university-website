# East University Webbplats

Kurslistan-appen är en onlinewebbapplikation som tillåter användare att visa, sortera, filtrera och organisera en lista över kurser. Användarna har också möjlighet att lägga till kurser i sitt RAM-schema och spara det lokalt i webbläsaren eller ta bort kurser från RAM-schemat. Dessutom visas poängantalet för varje kurs.

## Funktioner

- **Start sida**: det finns information om universitet med möjlighet att navigera mellan sidor.

- **Visa kurser**: Användare har möjlighet att se en lista över tillgängliga kurser.
- **Sortera kurser**: Användare kan sortera kurser efter kurskod, kursnamn, poäng eller ämne.
- **Filtrera kurser**: Användare kan filtrera kurser baserat på ämne.
- **Hantera RAM-schema**: Användare kan lägga till kurser till sin RAM-schema och ta bort kurser från den.
- **Spara RAM-schema**: RAM-schema sparas automatiskt i webbläsarens lokal lagring så att den kan återställs vid sidans uppdatering.
- **Visa antal poäng**: Antal poäng för varje kurs visas tydligt för användarna.
- **Växla tema**: Använd växlingsknappen för att växla mellan ljusa och mörka teman för en bättre användarupplevelse.
- **Bläddra kurser på samma sida**: Använd pagineringen för att bläddra mellan olika sidor av kurser direkt på samma sida.

## Användning

1. **Öppna applikationen**: Öppna webbläsaren och gå till [länken till applikationen](https://statuesque-palmier-889062.netlify.app/home).
2. **Visa kurser**: På startsidan visas en lista över tillgängliga kurser.
3. **Sortera kurser**: Använd rullgardinsmenyn för att välja hur du vill sortera kurserna och klicka på "Sortera".
4. **Filtrera kurser**: Välj ett ämne från rullgardinsmenyn och klicka på "Filtrera" för att visa endast kurser i det valda ämnet.
5. **Hantera RAM-schema**: Klicka på "Lägg till" bredvid en kurs för att lägga till den i din RAM-schema. Klicka på "Ta bort" bredvid en kurs i RAM-schemat för att ta bort den.
6. **Spara RAM-schema**: RAM-schema sparas automatiskt i webbläsarens lokal lagring när du lägger till eller tar bort kurser.
7. **Visa antal poäng**: Antal poäng för varje kurs visas bredvid kursens information.
8. **Växla tema**: Använd växlingsknappen för att växla mellan ljusa och mörka teman för en bättre användarupplevelse.
9. **Bläddra kurser på samma sida**: Använd pagineringen eller scrolla för att bläddra mellan olika sidor av kurser direkt på samma sida.
- eller du kan klona repo direkt till din pc och sedan i terminalen Kör `ng serve` för en utvecklarserver. Navigera till `http://localhost:4200/`. Applikationen laddas om automatiskt om du ändrar någon av källfilerna.
## Tekniska detaljer

Applikationen är byggd med Angular och använder PrimeNG för tabellkomponenter och andra UI-element. Kursdata hanteras med hjälp av TypeScript och RAM-schema sparas i webbläsarens lokal lagring med hjälp av Angular's localStorage-funktioner.