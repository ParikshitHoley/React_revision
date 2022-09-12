import styles from "./CountriesCard.module.css";

// function CountriesCard({data}) {
//   return (
//   <div data-testid="country-card" className={styles.container}>
//       <div>
//         Country: <b data-testid="country-card-name">India</b>
//       </div>
//       <div>
//         Population: <b data-testid="country-card-population">100</b>
//       </div>
//     </div>
//   );
// }

function CountriesCard({data}) {
  return (
  <div data-testid="country-card" className={styles.container}>
      {data.map(({country,population,id})=>{
        return (
          <div key={id}>
             <div>
        Country: <b data-testid="country-card-name">{country}</b>
      </div>
       <div>
        Population: <b data-testid="country-card-population">{population}</b>
      </div>
          </div>
        )
      })}
    </div>
  );
}

export default CountriesCard;
