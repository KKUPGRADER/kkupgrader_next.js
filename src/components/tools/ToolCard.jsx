import { Card, CardBody, CardTitle, CardDescription } from "components/Card";
import { RiShareCircleFill } from "react-icons/ri";
import Link from "next/link";

export default function ToolCard({ title, description, path, category, online, ...props }) {

    return (
        <Card  {...props}>
            <CardBody className="d-flex flex-column justify-content-start">
                <CardTitle>{title}</CardTitle>
                <div>
                    <span className=" Badge  mb-2 ">{category}</span>
                    <span className={"Badge  mb-2 ms-2 " + (online ? "Badge_success" : "Badge_danger")} title={online ? " Tool is working Fine :)" : "Tool has Some Issues ;)"}>{online ? "On" : "Off"}</span>

                </div>
                <CardDescription>
                    {description}
                </CardDescription>
                <Link href={path} className="mt-auto">
                    Try this Tool
                    <RiShareCircleFill />
                </Link>
            </CardBody>
        </Card>
    )
}