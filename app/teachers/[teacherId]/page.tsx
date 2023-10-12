import TeacherDetail from "@/app/components/TeacherDetail/TeacherDetail";

const detail = ({ params }: { params: { teacherId: number } }) => {
    return (  
        <TeacherDetail />
    );
}
 
export default detail;


