var countries = {
    Belarus: Minsk,
    Russia: Moskow;
    China: Pekin;
    Poland: Warshawa;
    }
    function newCountry() {
    let nameCountry = prompt('Введите название страны:');
    let nameCapital = prompt('Введите название столицы:');
    countries[nameCountry] = nameCapital;
    }