import VoteComponent from "./voteComponent";
import QueryComponent from "./queryComponent";
import DelegateComponent from "./delegateComponent";
import MintTokensForm from "./mintTokens";
import VotesTable from "./VotesTable";
import SaveVote from "./saveVote";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

export default function InstructionsComponent() {
  return (
    <Container component="main" maxWidth="md">
      <Box display="flex" flexDirection="column" gap={3}>
        <MintTokensForm></MintTokensForm>
        <DelegateComponent></DelegateComponent>
        <VoteComponent></VoteComponent>
        <QueryComponent></QueryComponent>
        <SaveVote></SaveVote>
        <VotesTable></VotesTable>
      </Box>
    </Container>
  );
}
