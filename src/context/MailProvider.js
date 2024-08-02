import React, { createContext, useContext, useReducer } from "react";

import { mails } from "../data/inbox";

import { mailReducer } from "../reducer/mailReducer";

const MailContext = createContext(null);

const useMail = () => useContext(MailContext);

function getFilteredData(mailList, { showStarred, showUnread }) {
  return mailList
    .filter(({ isStarred }) => (showStarred ? isStarred : true))
    .filter(({ unread }) => (showUnread ? unread : true));
}

const MailProvider = ({ children }) => {
  const [{ data, showStarred, showUnread, spam, trash }, dispatch] = useReducer(
    mailReducer,
    {
      data: mails,
      showStarred: false,
      showUnread: false,
      spam: [],
      trash: []
    }
  );

  const filteredData = getFilteredData(data, {
    showStarred: showStarred,
    showUnread: showUnread
  });

  return (
    <MailContext.Provider
      value={{
        data: filteredData,
        dispatch,
        spam,
        trash,
        showStarred,
        showUnread
      }}
    >
      {children}
    </MailContext.Provider>
  );
};

export { MailProvider, useMail };
