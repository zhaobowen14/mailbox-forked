import React from "react";
import { MailCard } from "../component/MailCard";
import { useMail } from "../context/MailProvider";

export default function Spam() {
  const { spam } = useMail();

  return (
    <div style={{ padding: "3rem" }}>
      {spam.map((mail) => {
        return <MailCard {...mail} key={mail.mId} noDetail isInSpam />;
      })}
      {spam.length <= 0 ? <p>No spam mails available.</p> : null}
    </div>
  );
}
