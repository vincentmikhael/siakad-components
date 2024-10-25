import { CaretLeft, CaretRight } from "@phosphor-icons/react/dist/ssr"
import { Button } from ".."

const Pagination = () =>{
    return (
        <div className="flex justify-between items-center mt-6">
          <nav aria-label="Pagination" className="flex items-center w-full">
            <div className="flex-1 flex justify-start">
              <Button variant="white" leftIcon={<CaretLeft />}>
                Previous
              </Button>
            </div>
            <div className="flex-1 flex justify-center gap-3">
              <Button variant="white">1</Button>
              <Button variant="white" className={"border-0"}>
                2
              </Button>
              <Button variant="white" className={"border-0"}>
                3
              </Button>
            </div>
            <div className="flex-1 flex justify-end">
              <Button variant="white" rightIcon={<CaretRight />}>
                Next
              </Button>
            </div>
          </nav>
        </div>
    )
}

export default Pagination