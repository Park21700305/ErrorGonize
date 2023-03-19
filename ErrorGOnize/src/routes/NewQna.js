import {
  Box,
  Button,
  Container,
  InputLabel,
  TextField,
  Link,
} from "@mui/material";
import CateDropdown from "../components/Common/CateDropdown";
import Toggle from "../components/NewNote/Toggle";

export default function NewQna() {
  return (
    <Container
      maxWidth="md"
      //   sx={{ border: "5px solid #f3f3f3", borderRadius: 5, mt: 2 }}
    >
      <Box display="flex" justifyContent="space-between" sx={{ p: 3 }}>
        <Box display="flex" alignItems="center" gap={3}>
          <CateDropdown />
        </Box>
        <Box display="flex" gap={2}>
          <Button
            variant="outlined"
            color="warning"
            disableElevation
            onClick={() => {
              window.history.back();
            }}
          >
            취소
          </Button>
          <Button
            variant="contained"
            color="warning"
            disableElevation
            onClick={() => {
              window.history.back();
            }}
          >
            완료
          </Button>
        </Box>
      </Box>

      <Box>
        <InputLabel sx={{ pl: 3.5 }}>제목</InputLabel>
        <TextField fullWidth sx={{ p: 3, pt: 0.5 }} size="small" />
        <InputLabel sx={{ pl: 3.5 }}>내용</InputLabel>
        <TextField
          fullWidth
          sx={{ p: 3, pt: 0.5 }}
          multiline
          rows={19}
          size="small"
        />
      </Box>
    </Container>
  );
}
