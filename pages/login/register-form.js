import React, { useState } from "react"


import Input from "../../components/Input"
import Button from "../../components/Button"
import SocialMediaButton from "../../components/SocialMediaButton"

export default function RegisterForm() {

  return (
    <form
      style={{ display: "flex", flexDirection: "column", paddingTop: 30 }}
    >
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
        Register with social media
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

      <hr
        style={{ width: "100%", height: 1, color: "#f6f6f655", marginTop: 50 }}
      />
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
        Register with E-mail
      </span>

      <Input
        name="name"
        register={register}
        placeholder="Name"
      />
      <Input
        name="surname"
        register={register}
        placeholder="Surname"
      />
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

      <Button type="submit">Register</Button>
      <div style={{ fontSize: 12, display: "flex" }}>
        By clicking Register, you agree to use out Terms and that you have read
        our Data Use Policy, including our Cookie Use
      </div>
    </form>
  );
}
