the Beauty or the Beast - zadanie rekrutacyjne

Ostateczny plik z wyświetloną tabelą znajduje się w pliku index.html, reszta plików w katalogu Try to pliki z cząstkowymi rozwiązaniami
Wyświetlałem pliki poprzez Firefoxa oraz Chrome, w tym ostatnim mi nie działało, nie wiem dlaczego, proszę o używanie Firefoxa :)
Opis dojścia do rozwiązania:
0. podpiąłem bibliotekę jQuery, zarządałem ajaxem pliku json, wypisałem kolejne rekordy w wierszu tabeli, następny row dodałem do poprzednich poprzez appendTo, stworzyłem iterację funkcją for
1. przy pomocy funkcji $.getJSON pobrałem dane, wypisałem kolejne rekordy w wierszu tabeli, następny row dodałem do poprzednich poprzez appendTo, zamknąłem funkcją for each, żeby wypisywał dopóki nie skończą się dane
2. skorzystałem z pluginu DataTable w celu zobrazowania sobie porządanego wyniku i przemyślenia sposobu dojścia do niego.
3. funkcję sortTable wywołałem po naciśnięciu na nagłówek tabeli
4. w celach informacyjno - poznawczych użyłem plugin w3 do sortowania tabeli :)
5. zastosowałem funkcję filtrującą, na razie filtruje tylko według wartości pierwszej kolumny tabelki czyli ID
6. przebudowałem funkcję filtrującą, żeby filtrowała przez całość tabelki, niestety "ucina" nagłówek tabelki
7. już nie ucina :)
8. zaimplementowałem datePicker jQuery plugin
9. stworzyłem paginację poprzez użycie funkcji jquery hide oraz show na konkretne rzędy tabelki (domyślam się że chodziło o coś innego, spróbuję jeszcze pomyśleć nad innym rozwiązaniem)

nie formatowałem zbytnio wyglądu w css, gdyby miały być ujęte punkty z tego powodu, proszę o info, chętnie dopracuję wygląd

Tomasz Pięta

