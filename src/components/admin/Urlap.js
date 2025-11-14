import React, { useContext, useState } from "react";
import { UrlapContext } from "../../contexts/UrlapContext";

export default function Urlap() {
  const [formData, setFormData] = useState({});
  const { formAdatok } = useContext(UrlapContext);
  function beir(e) {
    let kulcs = e.target.id;
    let ertek = e.target.value;
    if (kulcs=="ar"){
        ertek=Number(ertek)
    }
    setFormData({
      ...formData,
      [kulcs]: ertek,
    });
  }
  function kuld(e) {
    e.preventDefault();
    formAdatok(formData);
  }
  return (
    <div>
      <form onSubmit={kuld} style={{width:"50%",margin:"auto"}}>
        <div class="mb-3">
          <label for="title" class="form-label" placeholder="Title">
            Cikk neve
          </label>
          <input
            type="text"
            class="form-control"
            id="title"
            aria-describedby="titleHelp"
            value={formData.title || ""}
            onChange={beir}
          />
          <div id="titleHelp" class="form-text">
            A címet kötelező megadni!
          </div>
        </div>
        <div class="mb-3">
          <label for="ar" class="form-label" placeholder="">
            Ár
          </label>
          <input
            type="number"
            class="form-control"
            min="0"
            max="10000"
            id="ar"
            aria-describedby="arHelp"
            value={formData.ar || ""}
            onChange={beir}
          />
          <div id="arHelp" class="form-text">
            Az ár nem lehet több, mint 10.000 Ft.
          </div>
        </div>

        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
