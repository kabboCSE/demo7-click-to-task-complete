import Container from "./components/Container";
import Footer from "./components/Footer";
import Nav from "./components/Nav";

function App() {
  return (
    <div>
      <Nav></Nav>
      {/* Box */}
      <Container>
        <div className="grid grid-cols-3 gap-[20px] my-[80px]">
          <div className="rounded-md p-7 text-white h-[250px] bg-gray-600 flex flex-col items-center justify-center">
            <h2 className="font-bold text-[35px]">Pending</h2>
            <p className="font-semibold text-[26px]">0</p>
          </div>
          <div className="rounded-md p-7 text-white h-[250px] bg-purple-600 flex flex-col items-center justify-center">
            <h2 className="font-bold text-[35px]">Submitted</h2>
            <p className="font-semibold text-[26px]">0</p>
          </div>
          <div className="rounded-md p-7 text-white h-[250px] bg-teal-600 flex flex-col items-center justify-center">
            <h2 className="font-bold text-[35px]">Reviewed</h2>
            <p className="font-semibold text-[26px]">0</p>
          </div>
        </div>
      </Container>
      {/* Toggle buttons */}
      <Container>
        <div className="text-right mb-[50px]">
          <button className="bg-purple-100 text-purple-500 px-4 py-1 font-semibold text-lg rounded-l-md cursor-pointer">
            All
          </button>
          <button className="bg-purple-100 text-purple-500 px-4 py-1 font-semibold text-lg cursor-pointer">
            Pending
          </button>
          <button className="bg-purple-100 text-purple-500 px-4 py-1 font-semibold text-lg cursor-pointer">
            Submitted
          </button>
          <button className="bg-purple-100 text-purple-500 px-4 py-1 font-semibold text-lg rounded-r-md cursor-pointer">
            Reviewed
          </button>
        </div>
      </Container>

      <Footer></Footer>
    </div>
  );
}

export default App;
