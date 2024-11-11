// src/app/projekt/page.tsx
export default function ProjectPage() {
    return (
      <>
        <div className="tekniker">
            <div>
                <h1>Tekniker</h1>
                <p>
                Det finns mängder av olika trycktekniker, alla
                med olika fördelar. Vilken teknik som lämpar
                sig bäst för ditt projekt avgörs av antal,
                material och önskad känsla!
                <br />
                <br />
                Kontakta oss så hjälper vi dig med ditt projekt!
                </p>
                <button>Kontakta oss</button>
            </div>
            <div className="grid-item-techniques">
                <img src="tekniker/Screentryck.jpg" alt="Screentryck"/>
                <span>Screentryck</span>
            </div>
        </div>
        <div className="tekniker"> 
            <div className="grid-item-techniques">
                    <img src="tekniker/High-Density-Print.jpg" alt="High Density Print"/>
                    <span>High Density Print</span>
            </div>
            <div className="grid-item-techniques">
                <img src="tekniker/brodyr2.jpg" alt="Brodyr"/>
                <span>Brodyr</span>
            </div>
        </div>
        <div className="tekniker2"> 
            <div className="grid-item-techniques">
                    <img src="tekniker/3D-brodyr.jpg" alt="3D-brodyr"/>
                    <span>3D-brodyr</span>
            </div>
            <div className="grid-item-techniques">
                <img src="tekniker/DTG1.jpg" alt="DTG"/>
                <span>DTG</span>
            </div>
            <div className="grid-item-techniques">
                <img src="tekniker/DTF.jpg" alt="DTF"/>
                <span>DTF</span>
            </div>
        </div>
        <div className="tekniker last"> 
        <div className="grid-item-techniques">
                <img src="tekniker/Sublimerat.jpg" alt="sublimering"/>
                <span>Sublimering</span>
            </div>
            <div className="grid-item-techniques">
                    <img src="tekniker/vavd.jpg" alt="Värd"/>
                    <span>Vävd</span>
            </div>
        </div>
      </>
    );
  }
  