import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { ChapterList } from "./chapter/ChapterList";
import { ChapterCreate } from "./chapter/ChapterCreate";
import { ChapterEdit } from "./chapter/ChapterEdit";
import { ChapterShow } from "./chapter/ChapterShow";
import { ComicList } from "./comic/ComicList";
import { ComicCreate } from "./comic/ComicCreate";
import { ComicEdit } from "./comic/ComicEdit";
import { ComicShow } from "./comic/ComicShow";
import { BookmarkList } from "./bookmark/BookmarkList";
import { BookmarkCreate } from "./bookmark/BookmarkCreate";
import { BookmarkEdit } from "./bookmark/BookmarkEdit";
import { BookmarkShow } from "./bookmark/BookmarkShow";
import { ReadingHistoryList } from "./readingHistory/ReadingHistoryList";
import { ReadingHistoryCreate } from "./readingHistory/ReadingHistoryCreate";
import { ReadingHistoryEdit } from "./readingHistory/ReadingHistoryEdit";
import { ReadingHistoryShow } from "./readingHistory/ReadingHistoryShow";
import { NotificationList } from "./notification/NotificationList";
import { NotificationCreate } from "./notification/NotificationCreate";
import { NotificationEdit } from "./notification/NotificationEdit";
import { NotificationShow } from "./notification/NotificationShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"ComicServiceNode"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Chapter"
          list={ChapterList}
          edit={ChapterEdit}
          create={ChapterCreate}
          show={ChapterShow}
        />
        <Resource
          name="Comic"
          list={ComicList}
          edit={ComicEdit}
          create={ComicCreate}
          show={ComicShow}
        />
        <Resource
          name="Bookmark"
          list={BookmarkList}
          edit={BookmarkEdit}
          create={BookmarkCreate}
          show={BookmarkShow}
        />
        <Resource
          name="ReadingHistory"
          list={ReadingHistoryList}
          edit={ReadingHistoryEdit}
          create={ReadingHistoryCreate}
          show={ReadingHistoryShow}
        />
        <Resource
          name="Notification"
          list={NotificationList}
          edit={NotificationEdit}
          create={NotificationCreate}
          show={NotificationShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
