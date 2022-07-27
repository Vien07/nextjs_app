import React, { useState } from "react"


import Input from "../../components/Input"
import Button from "../../components/Button"
import Link from "next/link";
import SocialMediaButton from "../../components/SocialMediaButton"



export default function LoginForm() {

  return (
    <form
      style={{ display: "flex", flexDirection: "column" }}
    >
      <Input
        name="email"
        register={register}
        placeholder="E-mail"
      />

      <Input
        name="password"
        register={register}
        placeholder="Password"
        type="password"
      />
      <Button type="submit">Login</Button>
      
      <span style={{ fontWeight: "bold", marginBottom: 60 }}>
        <Link href="/forgot-password">Forgot Password?</Link>
      </span>

      {/*   Social Media Buttons  */}
      <hr style={{ width: "100%", height: 1, color: "#f6f6f655" }} />
      <span
        style={{
          textAlign: "center",
          marginTop: -35,
          padding: 15,
          backgroundColor: "white",
          display: "flex",
          alignSelf: "center",
          width: "max-content",
          fontWeight: "500",
        }}
      >
        Login with social media
      </span>
      <div style={{ display: "flex" }}>
        <SocialMediaButton
          style={{ marginRight: 20 }}
          icon="google"
          onClick={googleAuth}
        >
          Google
        </SocialMediaButton>
        <SocialMediaButton icon="apple">Apple</SocialMediaButton>
      </div>
    </form>
  );
}
