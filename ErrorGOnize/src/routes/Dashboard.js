import { Box, Container } from "@mui/material";
import Popularqna from "../components/Common/Popularqna";
import RecentQtn from "../components/Dashboard/RecentQtn";
import DashboardWrite from "../components/Dashboard/DashboardWrite";
import QuestionBar from "../components/Dashboard/QuestionBar";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import QuestionCard from "../components/Qna/QuestionCard";

  export default function Dashboard() {

    const [boards, setBoards] = useState([]);

    const getBoards = async () => {
      const board = await axios.get("http://localhost:8080/dashboard");
      setBoards(board.data);
    };

    useEffect(() => {
      getBoards();
    }, [boards]);

    return (
      <Container sx={{ pt: 3, mb: 3 }}>
        <Box display="flex" gap={6} alignItems="flex-start">
          <Box display="flex" flexDirection="column" gap={3} width="calc(60vw)">
            <QuestionBar />
            {boards.map((board) => (
              <Link
                to={`/qna/detailqna/${board.question_no}`}
                style={{ textDecoration: "none" }}
              >
                <QuestionCard key={board.question_no} board={board} />
              </Link>
            ))}
          </Box>
          <Box display="flex" flexDirection="column" gap={3} width="calc(20vw)">
            <Popularqna />
            <DashboardWrite />
          </Box>
        </Box>
      </Container>
    );
  }
