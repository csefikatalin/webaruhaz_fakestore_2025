# FakeStore Webáruház

## A  fejlesztés során használt eszközök

### fakestore API elérése
<a href="https://fakestoreapi.com/docs#tag/Products/operation/getAllProducts">Összes termék lekérése</a>

### Telepítsd a Bootstrap-et!

    npm install bootstrap

### index.js-be

    import "bootstrap/dist/css/bootstrap.css";

### Telepítsd az Axios-t!

<a href="https://www.npmjs.com/package/axios">Axios</a>

    npm install axios


## Hozd létre a mappaszerkezetet

src/
│
├── components/
│ ├── public/
│ │ ├── Card.js
│ │ ├── Cards.js
│ │ ├── Kosar.js
│ │ └── KosarItem.js
│ │
│ └── (egyéb komponensek...)
│
├── contexts/
│ ├── PublicContext.js
│ └── CardContext.js
│
├── App.js
├── index.js
└── styles.css


- **Card.jsx** – Egyetlen termékkártyát jelenít meg.  
- **Cards.jsx** – A termékkártyák gyűjteménye, flex/grid elrendezéssel.  
- **Kosar.jsx** – A kosár teljes tartalmát és összesítést jeleníti meg.  
- **KosarItem.jsx** – Egyetlen tétel a kosárban.  
- **AdatContext.jsx** – A nyilvános (termék) adatok kezelésére szolgáló kontextus.  
- **KosarContext.jsx** – A kosár adatait és metódusait kezeli (pl. hozzáadás, törlés, összegzés).

## a Fakestore API elérése axiosszal

A kód helye a CardContext-ben van. 

``` code javascript
  function getProducts() {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setData(response.data);
        setLoading(true);
      })
      .catch((err) => {
        console.error("Hiba történt a lekérés közben:", err);
        setError("Nem sikerült betölteni a termékeket. Próbáld újra később.");
      })
      .finally(() => {
        setLoading(false);
      });
  }

  useEffect(() => {
    getProducts();
  }, []);
  ```