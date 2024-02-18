function city_country(city: string, country: string): string {
    return `${city}, ${country}`;
}


let formattedString: string = city_country("Karachi", "Pakistan");
console.log(formattedString);
