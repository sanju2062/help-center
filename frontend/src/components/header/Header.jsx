import styles from "./header.module.css";
import Logo from "../../assests/svg4.svg";
import { useState } from "react";
export default function Header() {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    console.log(query);
  };

  return (
    <div className={styles.headerContainer}>
      <div className={styles.subHeaderContainer}>
        <div className={styles.leftDiv}>
          <img src={Logo} alt="icon" height="25px" width="32px" />
          <div>Abstract | Help Center</div>
        </div>
        <div className={styles.rightDiv}>
          <button>Submit a request</button>
        </div>
      </div>
      <div className={styles.searchContainer}>
        <div>How can we help?</div>
        <div className={styles.searchBarContainer}>
          <input
            type="text"
            className={styles.searchInput}
            placeholder="Search..."
            value={query}
            onChange={handleInputChange}
          />
          <button className={styles.searchButton} onClick={handleSearch}>
            ➔
          </button>
        </div>
      </div>
    </div>
  );
}
