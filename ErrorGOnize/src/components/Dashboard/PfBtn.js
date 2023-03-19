import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function PfBtn() {
    return (
    <Link to={"/mypage"} style={{ textDecoration: "none" }}>
      <Button>
            <AccountCircleIcon sx={{ fontSize: 60, color: "#999" }}/>           
      </Button>
    </Link>
    );
  }
