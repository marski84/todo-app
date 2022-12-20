<h2 align="center">TODO</h2>

<br>

## Wymagana wiedza

- Typescript, Angular

## Technologie potrzebne do zadania

- Typescript, Angular, Angular Material,

## Cele główne

Typowa lista TODO

- [ ] Componentu ContainerComponent

* Służy do wyświetlania wszystkich komponentów dashboardu.
* Za pomocą `<mat-tab>` tworzymy 2 zakladki - lista TODO oraz druga która jest widokiem statystyk.

- [ ] Moduł TODO

* Component do dodawania nowego task'a(tytuł+opis+priorytet) -> otwierany jako popup po kliknięciu przycisku.
* Lista zadań TODO analogicznie do np. trello czyli nazwane kolumny z możliwością dodawania kolejnych kolumn.
* W każdej kolumnie z góry w dół kolejne taski - kazdy task pokazuje tytuł po kliknięciu w task otwieramy popup z edycją.
* Obok tytułu widoczny checkbox oznaczający zakończony task.
* Możliwość przeciągania tasków z jednej kolumny do drugiej.
* Możliwość zmiany kolejności tasków w obrębie kolumny za pomocą przeciągnięcia.
* Taski oraz kolumny zapisujemy w Local Storage

- [ ] Popup do dodawania/edycji tasków

- [ ] Moduł Statytyk

* Po wejściu zliczamy ile zadań jest w takiej kolumnie(dzielimy zliczenie na poszczególne priortety -> ile z wysokim, ile z niskim...) i wyświetlamy informacje o każdej kolumnie w osobnych `<mat-card>`

- [ ] Dodatkowo

* Oba moduły używają serwisu do logowania aktualnych danych o taskach do consoli.
* Pomimo użycia jednego serwisu musimy za pomocą Dependency Injection wstrzyknąć informacje z którego modułu został wysłany log. Tak aby zapewnić możliwość rozbudowy o kolejne logi w nowych Modułach bez zmian w Serwsie.

- [ ] Dodatkowo #2

* W logu wysyłamy również token z pliku konfiguracyjnego tzn. Environments - wiec jeżeli jesteśmy w wersji produkcyjnej token musi być inny niż na innych środowiskach
* Tworzymy 3 Environments: dev, beta, prod.

## Przydatne linki

- Environments - https://www.angular.love/2017/10/04/angular-multiple-environments/
- Drag and drop - https://material.angular.io/cdk/drag-drop/overview
- DI - https://www.angular.love/2018/03/09/angular-injectiontoken/
