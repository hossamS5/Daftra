import DropDownMenu from "@/components/molecules/dropdownMenu";
import VectorDown from "@/assets/icons/vectorDown.svg";
import FilterDropDown from "@/components/molecules/filterDropdown";
import JobCard from "@/components/molecules/jobCard";
import { jobsData } from "@/data/jobsData";
import AlertWithToggleSection from "@/components/organisms/dashboard/alertWithToggleSection";
import PaginationCutomized from "@/components/molecules/pagination";

export default async function Home() {
  return (
    <div className="flex flex-col gap-[26px]">
      <section className="w-full flex justify-end">
        <DropDownMenu
          title={
            <div className="flex items-center gap-1 text-lg">
              <span className="text-[20px] text-[#404040]">Sorting by : </span>
              <span className="text-secondary-10 text-[20px]">Top match</span>
              <VectorDown />
            </div>
          }
          classes="hidden md:block"
          width="300px"
          padding="0px"
        >
          <FilterDropDown />
        </DropDownMenu>
      </section>

      <AlertWithToggleSection />

      <section className="w-full flex flex-col gap-3">
        {jobsData.map((job, index) => (
          <JobCard key={index} item={job} />
        ))}
      </section>

      <section className="flex items-center justify-center">
        <PaginationCutomized pagesNumber={3} cuurentPage={1} />
      </section>
    </div>
  );
}
