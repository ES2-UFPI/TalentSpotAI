import MiniAgendaList from "@/components/Lists/MiniAgendaEntrevistas";
import { Card, CardContent, CardHeader } from "@mui/material";

export default function MiniAgendaCard () {
    return(
        <Card>
            <CardHeader 
                title="Agenda de entrevistas"
            />
            <CardContent>
                <MiniAgendaList />
            </CardContent>
        </Card>
    );
}