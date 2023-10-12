import StudentDetail from "@/app/components/StudentDetail/StudentDetail";

const student_detail = ({ params }: { params: { studentId: string } }) => {
    return (  
        <StudentDetail />
    );
}

export default student_detail;