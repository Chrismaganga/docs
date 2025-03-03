import { Editor } from "./editor";

interface DocumentIdPageProps {
    params: Promise<{documentId: string}>;
}

const DocumentIdPage = async ({params}: DocumentIdPageProps) => {
   
    const {documentId} = await params;
    
  return(
    <div>
      <div className="min-h-screen bg-[#FAFBFD]">
        <h1>Document ID: {documentId}</h1>
        <Editor />
      </div>
    
    </div>
  ) ;
};

export default DocumentIdPage;