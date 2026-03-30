    const generate = document.getElementById("generate");
    const link = document.getElementById("link");

  async function change() {

  const  urle = link.value;

    const apikey = "ctjwYib0MoyOFyKc7STPBdWfTe4OnlWNqlALQxMRbCassi9YyxTHnwGzyWkD";

    const response = await fetch("https://api.tinyurl.com/create",{
      method: 'POST',
      headers: {
        'Authorization' : `Bearer ${apikey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        url: urle,
        domain: "tinyurl.com"
      })
    })
    const data = await response.json();
   generate.value = data.data.tiny_url;
  }