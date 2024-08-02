import React from "react";
import { MailCard } from "../component/MailCard";
import { useMail } from "../context/MailProvider";

export default function Trash() {
  const { trash } = useMail();

  return (
    <div style={{ padding: "3rem" }}>
      {trash.map((mail) => {
        return <MailCard {...mail} key={mail.mId} noDetail isInTrash />;
      })}
      {trash.length <= 0 ? <p>No conversations in Trash.</p> : null}
    </div>
  );
}
