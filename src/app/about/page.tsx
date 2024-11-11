// src/app/projekt/page.tsx
export default function ProjectPage() {
  return (
    <>
      <div className="about-us-outer">
        <div className="about-us">
          <div>
            <h1>Om oss</h1>
            <h3>En modern one-stop-shop</h3>
          </div>
          <div>
            <div>
              <h3>Produktval</h3>
              <p>
                I vår katalog med över 600 000 artiklar kan det vara lätt att gå
                vilse. Vi hjälper er att hitta rätt i allt från kläder till
                accessoarer och mässmaterial utefter ert projekt och önskemål.
                Finns inte det ni letar efter? Då skräddarsyr vi det åt er!
              </p>
            </div>

            <img src="about/IMG_6158.jpg" alt="Nineteen" />
            <div>
              <h3>Emballage & smådetaljer</h3>
              <p>
                Eget emballage, tejp eller klädetiketter är små detaljer som gör
                stor skillnad. Bygg ihop ett heltäckande paket för att sätta
                standarden ni förtjänar.
              </p>
            </div>
          </div>
          <div>
            <div>
              <h3>Leverans</h3>
              <p>
                Ny och fräsch merchandise levereras. En snabb och smärtfri process
                med garanterat bra resultat!
              </p>
            </div>
          </div>
        </div>
        <div className="about-us second">
          <img src="about/IMG_6120.jpg" alt="Nineteen" />
          <div>
            <h3>Grafisk designhjälp</h3>
                <p>Saknar ni logotyp eller vill testa på en ny design
                hjälper våra grafiker till att ta fram motiv.</p>
          </div>
          <div>
                <h3>Produktion</h3>
              <p>
              Majoriteten av vårt utbud produceras och dekoreras i Europa. Det
              innebär en både etisk och miljövänlig produktion, men också
              nedkortade ledtider på ca 1-3 veckor! Har ni bråttom?
              Expressalternativ finns givetvis också.
            </p>
          </div>
          <img src="about/IMG_6163.jpg" alt="Nineteen" />
        </div>
      </div>
    </>
  );
}
