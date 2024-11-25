import MainLogin from "@/components/auth/mainLogin";
import DefaultLayout from "@/layouts/default";

export default function DocsPage() {
    return (
        <DefaultLayout>
                <MainLogin />
        </DefaultLayout>
    );
}

// import MainLogin from "@/components/auth/mainLogin";
// const MainAuth = ()=>{
//     return (
//         <div className="w-full p-10">
//             <MainLogin />
//         </div>
//     )
// }
// export default MainAuth;