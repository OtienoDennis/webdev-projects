export default async function useMealDbAPi() {
  try {
    const response = await fetch(
      'https://www.themealdb.com/api/json/v1/1/random.php'
    );
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}
