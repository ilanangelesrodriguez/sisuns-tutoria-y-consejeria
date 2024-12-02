import MainLogin from "@/components/auth/mainLogin";
import DefaultLayout from "@/layouts/default";

export default function DocsPage() {
    return (
        <DefaultLayout>
        <div className="" style={{width: '100%', display:"flex", flexDirection:"column"}}>
           <MainLogin />
        </div>
        </DefaultLayout>
    );
}