//1.1
async function getRandomUser() {
  const response = await fetch("https://randomuser.me/api");
  const data = await response.json();
  const name = `${data.results[0].name.first} ${data.results[0].name.last}`;
  const email = data.results[0].email
  const image = data.results[0].picture.large;
  const age = data.results[0].dob.age;
  const gender = data.results[0].gender;
  return [name, email, image, age, gender];
}
  
const button1 = document.getElementsByTagName("button")[0];
const containerData = document.getElementsByTagName("h4")[0];
const dataEmail = document.getElementsByTagName("p")[0];
const imageURL = document.getElementsByTagName("img")[0];
const dataAge = document.getElementsByTagName("p")[1];
button1.addEventListener("click", async () => {
  const [name, email, image, age, gender] = await  getRandomUser();
  containerData.textContent = name;
  dataEmail.textContent = email;
  imageURL.src = image;
  dataAge.textContent = age
});

//1.2
const button2 = document.getElementsByTagName("button")[1];
button2.addEventListener("click", async () => {
let count = 1
    while (count <= 5) {
        const [name, email, image, age, gender] = await  getRandomUser();
        if (gender === "male") {
            console.log(`name: ${name}\nemail: ${email}\nage: ${age}\n`);
            count++
        }

    }
})

