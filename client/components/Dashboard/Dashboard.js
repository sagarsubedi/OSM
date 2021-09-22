import Card from "./Card";
import Chart from "./Charts";


function Dashboard() {
    return (
        <div className="flex flex-col">
            {/* cards here */}
            <div className="flex px-10 sm:px-20 text-2xl whitespace-nowrap space-x-10 sm:space-x-20 justify-between">
                <Card icon='0' title="TITLE" />
                <Card icon='1' title="TITLE" />
                <Card icon='2' title="TITLE" />
                <Card icon='3' title="TITLE" />
                <Card icon='4' title="TITLE" />
            </div>

            {/* charts here */}
            <div className="ml-4 mt-20">
                <Chart></Chart>
            </div>

        </div>

        
    )
}

export default Dashboard;
