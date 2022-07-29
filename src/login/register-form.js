import React, { useState } from "react"
import Input from "../../components/Input"
import Button from "../../components/Button"
import SocialMediaButton from "../../components/SocialMediaButton"
import styles from "./form.module.scss"

export default function RegisterForm() {

  return (
    <form className={styles.form}>

      <hr style={{ width: "100%", height: 1, color: "#f6f6f655", marginTop: 30 }} />
      <span className={styles.social_text}>
        Register with social media
      </span>

      <div style={{ display: "flex" }}>
        <SocialMediaButton
          style={{ marginRight: 20 }}
          icon="google"
        >
          Google
        </SocialMediaButton>
        <SocialMediaButton icon="apple">Apple</SocialMediaButton>
      </div>

      <hr
        style={{ width: "100%", height: 1, color: "#f6f6f655", marginTop: 50 }}
      />
      <span
        className={styles.social_text}
      >
        Register with E-mail
      </span>

      <Input
        name="name"

        placeholder="Name"
      />
      <Input
        name="surname"

        placeholder="Surname"
      />
      <Input
        name="email"

        placeholder="E-mail"
      />
      <Input
        name="password"

        placeholder="Password"
        type="password"
      />

      <Button type="submit">Register</Button>
      <div style={{ fontSize: 12, display: "flex" }}>
        By clicking Register, you agree to use out Terms and that you have read
        our Data Use Policy, including our Cookie Use
      </div>
    </form>
  )
}
