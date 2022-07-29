import React from "react"
import styles from "./categories.module.scss"
import Link from "next/link"
import HelpIcon from "../../icons/help"

const CategoryItem = ({ name, link, emoji }) => {
  return (
    <li className={styles.categoryItem}>
      <Link href={link || "/"}>
        <a>
          <span className={styles.emoji}>{emoji}</span>
          <span className={styles.categoryName}>{name}</span>
        </a>
      </Link>
    </li>
  );
};

export default function CategoriesBar() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Explore</h2>
      <ul className={styles.categories}>
        <CategoryItem name="New In" emoji="⚡" link="/" />
        <CategoryItem name="Clothing" emoji="👚" link="/" />
        <CategoryItem name="Shoes" emoji="👠" link="/" />
        <CategoryItem name="Accessories" emoji="👜" link="/" />
        <CategoryItem name="Activewear" emoji="🤸" link="/" />
        <CategoryItem name="Gifts & Living" emoji="🎁" link="/" />
        <CategoryItem name="Inspiration" emoji="💎" link="/" />
      </ul>
      <div className={styles.helpContainer}>
        <div className={styles.helpIcon}>
          <HelpIcon width={18} height={18} />
        </div>
        <span>Help Center</span>
      </div>
    </div>
  );
}
