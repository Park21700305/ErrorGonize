import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Dashboard from "./routes/Dashboard";
import Mypage from "./routes/Mypage";
import Note from "./routes/Note";
import Qna from "./routes/Qna";
import NewQna from "./routes/NewQna";
import Before from "./routes/Before";
import NewNote from "./routes/NewNote";
import DetailNote from "./routes/DetailNote";
import DetailQna from "./routes/DetailQna";
import EditNote from "./routes/EditNote";
import EditQuestion from "./routes/EditQna";
import { Box } from "@mui/material";

export default function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Box height={"calc(8vh)"}></Box>
      <Switch>
        <Route path="/qna/detailqna/:questionNo">
          <DetailQna />
        </Route>
        <Route path="/qna/edit/:questionNo">
          <EditQuestion />
        </Route>
        <Route path="/qna/newqna">
          <NewQna />
        </Route>
        <Route path="/qna">
          <Qna />
        </Route>
        <Route path="/note/detail/:noteNo">
          <DetailNote />
        </Route>
        <Route path="/note/newnote">
          <NewNote />
        </Route>
        <Route path="/note/edit/:noteNo">
          <EditNote />
        </Route>
        <Route path="/note">
          <Note />
        </Route>
        <Route path="/mypage">
          <Mypage />
        </Route>
        <Route path="/dashboard">
          {/* <Dashboard /> */}
          <Qna />
        </Route>
        <Route path="/">
          <Before />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
