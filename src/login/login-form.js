import React, { useState } from "react"
import Input from "../../components/Input"
import Button from "../../components/Button"
import Link from "next/link";
import SocialMediaButton from "../../components/SocialMediaButton"
import styles from "./form.module.scss"



export default function LoginForm() {

  return (
    <form className={styles.form}>
      <Input
        name="email"
        placeholder="E-mail"
      />

      <Input
        name="password"
        placeholder="Password"
        type="password"
      />
      <Button type="submit">Login</Button>
      
      <span className={styles.forgot_text}>
        <Link href="/forgot-password">Forgot Password?</Link>
      </span>

      {/*   Social Media Buttons  */}
      <hr className={styles.bar}/>
      <span
        className={styles.social_text}
      >
        Login with social media
      </span>
      <div style={{ display: "flex" }}>
        <SocialMediaButton
          style={{ marginRight: 20 }}
          icon="google">
          Google
        </SocialMediaButton>
        <SocialMediaButton icon="apple">Apple</SocialMediaButton>
      </div>
    </form>
  )
}
