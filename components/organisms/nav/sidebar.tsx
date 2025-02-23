import { useState } from "react";
import { useGlobalStore } from "@/utils/store";
import NavSortableItem from "@/components/organisms/nav/navSortableItem";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { useMutation, useQuery } from "@tanstack/react-query";
import axiosClient from "@/netwrok/axios";
import { NavItem } from "@/utils/types";
import { handleErrors } from "@/utils/helpers";
import SettingsIcon from "@/assets/icons/settings.svg";
import CheckIcon from "@/assets/icons/checkIcon.svg";
import CloseIcon from "@/assets/icons/closeIcon.svg";
import ArrowLeft from "@/assets/icons/arrowLeft.svg";
import toast from "react-hot-toast";
import SideNavSkeleton from "@/components/atoms/sideNavSkeleton";
import BtnLoader from "@/components/atoms/btnLoader";
import ErrorTryAgain from "@/components/molecules/errorTryAgain";

export const Sidebar = () => {
  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const [currentData, setCurrentData] = useState<NavItem[]>([]);
  const { setMobileSideNav } = useGlobalStore();

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const {
    data: oringinalData = [],
    isLoading,
    isError,
    refetch,
  } = useQuery<NavItem[]>({
    queryKey: ["navData"],
    queryFn: async () => {
      const { data } = await axiosClient.get("/nav");
      if (data) {
        setCurrentData([...data]);
      }
      return data;
    },
  });

  const { mutate: editNavItems, isPending } = useMutation({
    mutationFn: async (navItems: NavItem[]) => {
      const { data } = await axiosClient.post("/nav", navItems);
      return data;
    },
    onSuccess: () => {
      setIsEditMode(false);
      refetch();
      toast.success("Menu edited successfully!");
    },
    onError: (error) => {
      handleErrors(error);
    },
  });

  const updateItemVisability = (id: number) => {
    const updateNestedItem = (list: NavItem[]): any => {
      return list.map((item) => {
        if (item.id === id) {
          return { ...item, visible: !item.visible };
        }
        if (item.children) {
          return { ...item, children: updateNestedItem(item.children) };
        }
        return item;
      });
    };

    setCurrentData((prevData) => updateNestedItem(prevData));
  };

  const updateItemTitle = (id: number, title: string) => {
    const updateNestedItem = (list: NavItem[]): any => {
      return list.map((item) => {
        if (item.id === id) {
          return { ...item, title };
        }
        if (item.children) {
          return { ...item, children: updateNestedItem(item.children) };
        }
        return item;
      });
    };

    setCurrentData((prevData) => updateNestedItem(prevData));
  };

  const reorderItems = (
    fromIndex: number,
    toIndex: number,
    item: { type: string; parentId?: number }
  ) => {
    if (item.type === "child") {
      let cuurentdataNew = [...currentData];

      let newItems = cuurentdataNew.map((x) => {
        if (x.id === item.parentId) {
          if (!x?.children) return x;
          const [movedItem] = x?.children?.splice(fromIndex, 1);
          x?.children?.splice(toIndex, 0, movedItem);
        }
        return x;
      });
      setCurrentData(newItems);
    } else {
      const newItems = [...currentData];
      const [movedItem] = newItems.splice(fromIndex, 1);
      newItems.splice(toIndex, 0, movedItem);
      setCurrentData(newItems);
    }
  };

  const handleDragEnd = (event: any) => {
    const { active, over } = event;

    if (active.id !== over.id) {
      let findItemPosition = (id: number) => {
        for (
          let parentIndex = 0;
          parentIndex < currentData.length;
          parentIndex++
        ) {
          if (currentData[parentIndex].id === id) {
            return { type: "parent", index: parentIndex };
          }

          if (currentData[parentIndex].children) {
            const childIndex = currentData[parentIndex]?.children?.findIndex(
              (child) => child.id === id
            );
            if (childIndex !== -1) {
              return {
                type: "child",
                parentId: currentData[parentIndex].id,
                index: childIndex,
              };
            }
          }
        }
      };

      let oldItem = findItemPosition(active.id);
      let newItem = findItemPosition(over.id);

      if (
        typeof oldItem?.index !== "number" ||
        typeof newItem?.index !== "number"
      )
        return;
      //Should be from the same level
      if (oldItem?.type !== newItem?.type) return;
      //If childs should have the same parent
      if (oldItem?.type === "child" && oldItem?.parentId !== newItem?.parentId)
        return;

      reorderItems(oldItem?.index, newItem?.index, oldItem);

      // Analytic api
      axiosClient
        .post("/track", {
          id: active.id,
          from: oldItem?.index,
          to: newItem?.index,
        })
        .then((res) => console.log("Tracking succeded"))
        .catch((err) => {
          handleErrors(err, "Tracking faild");
        });
    }
  };

  const cancelEditMode = () => {
    setIsEditMode(false);
    setCurrentData([...oringinalData]);
  };

  if (isLoading) return <SideNavSkeleton />;
  if (isError) return <ErrorTryAgain clickhandler={() => refetch()} />;

  return (
    <aside className="inset-y-0 left-0 min-w-[430px] h-screen md:h-[calc(100vh-90px)] pb-3 bg-white border-r border-gray-200 overflow-y-auto">
      <div className="flex justify-between items-center px-10 py-4 mb-8 border-b border-[#E9E9E9]">
        <h2
          className={`text-[17px] md:text-[25px] font-medium flex items-center gap-3 text-black`}
        >
          <ArrowLeft
            className="block md:hidden"
            onClick={() => setMobileSideNav(false)}
          />
          Menu
        </h2>
        {!isEditMode ? (
          <div
            onClick={() => setIsEditMode(true)}
            className={`hover:bg-gray-100 ${isEditMode && "bg-gray-100"}`}
          >
            <SettingsIcon />
          </div>
        ) : (
          <div className="flex items-center gap-2 ">
            <button onClick={() => editNavItems(currentData)}>
              {isPending ? <BtnLoader /> : <CheckIcon />}
            </button>

            <button className="hidden md:block" onClick={cancelEditMode}>
              <CloseIcon />
            </button>
          </div>
        )}
      </div>

      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext
          items={currentData}
          strategy={verticalListSortingStrategy}
        >
          <div className="flex flex-col gap-[14px] px-4">
            {currentData
              ?.filter((x) => (isEditMode ? true : x?.visible))
              .map((item) => (
                <NavSortableItem
                  key={item.id}
                  item={item}
                  isEditMode={isEditMode}
                  updateItemVisability={updateItemVisability}
                  updateItemTitle={updateItemTitle}
                />
              ))}

            {isEditMode && (
              <button
                className="block md:hidden text-[#ED1F03] text-[17px] font-medium text-center mt-9"
                onClick={cancelEditMode}
              >
                Cancel
              </button>
            )}
          </div>
        </SortableContext>
      </DndContext>
    </aside>
  );
};
