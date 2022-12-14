import React, { useEffect, useState } from "react"
import Link from "next/link"
import styles from "./header.module.scss"
import SearchIcon from "../../icons/search"
import CartIcon from "../../icons/cart"
import ArrowIcon from "../../icons/arrow"
import MenuIcon from "../../icons/menu"

export default function Header({ user }) {
  const [showHeader, setShowHeader] = useState({
    transform: "translate3d(100vw, 0, 0)",
  })

  return (

    <nav className={styles.container}>
      <div className={styles.logoContainer}>
        <Link href="/">
          <a className={styles.logo}>Shopping</a>
        </Link>
        <div className={styles.rightContentMobile}>
          <Link href="/">
            <div className={styles.cartContainer}>
              <CartIcon width={28} height={28} className={styles.cartIcon} />
            </div>
          </Link>
          <div className={styles.profileContainer}>
            <MenuIcon
              width={30}
              height={30}
              onClick={() =>
                setShowHeader({ transform: "translate3d(0vw, 0, 0)" })
              }
            />
          </div>
        </div>
      </div>
      <div className={styles.rightMenu}>
        <div className={styles.menuContent} style={showHeader}>
          <>
            <Link href="/login">Login</Link>
            <Link href="/login">Register</Link>
          </>

        </div>
        <div
          className={styles.background}
          style={showHeader}
          onClick={() =>
            setShowHeader({ transform: "translate3d(100vw, 0, 0)" })
          }
        />
      </div>
      <div className={styles.searchContainer}>
        <SearchIcon
          width={20}
          height={20}
          fill="grey"
          className={styles.searchIcon}
        />
        <form>
          <input
            className={styles.searchInput}
            placeholder="Search for products, brands and more... "
          />
        </form>
      </div>
      <div className={styles.rightContent}>
        <Link href="/">
          <div className={styles.cartContainer}>
            <CartIcon width={20} height={20} className={styles.cartIcon} />
            <p>Cart: 0</p>
          </div>
        </Link>

        <Link href="/">
          <div className={styles.profileContainer}>
            <img
              src={user?.photoUrl || "https://picsum.photos/200/200"}
              className={styles.profilePhoto}
              loading="lazy"
            />
            <span>
              Hello{" "}
              <span style={{ fontWeight: "normal" }}>
                {user?.name || "Guest"}
              </span>
            </span>
            <ArrowIcon width={10} height={10} className={styles.arrowIcon} />
            <div className={styles.dropdown}
            >
              <div className={styles.arrowUp} />
              <div className={styles.dropdownMenu}>
                <>
                  <Link href="/login">Login</Link>
                  <Link href="/login">Register</Link>
                </>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </nav>
  )
}
