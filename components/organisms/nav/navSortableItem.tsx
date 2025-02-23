import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import { NavItem } from "@/utils/types";
import ArrowUp from "@/assets/icons/arrowUp.svg";
import DragIcon from "@/assets/icons/dragIcon.svg";
import EyeIcon from "@/assets/icons/eyeIcon.svg";
import EyeOffIcon from "@/assets/icons/eyeOff.svg";
import EditIcon from "@/assets/icons/editIcon.svg";
import InputField from "../../molecules/inputField";
import { useGlobalStore } from "@/utils/store";

interface IProps {
  item: NavItem;
  isEditMode: boolean;
  updateItemVisability: (id: number, childId?: number) => void;
  updateItemTitle: (id: number, title: string) => void;
  btnStyles?: object;
}

const NavSortableItem: React.FC<IProps> = ({
  item,
  isEditMode,
  updateItemVisability,
  updateItemTitle,
  btnStyles = {},
}) => {
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editingTitle, setEditingTitle] = useState("");
  const [open, setOpen] = React.useState(false);
  const { setMobileSideNav } = useGlobalStore();
  const router = useRouter();
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: item.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    border: isDragging ? "1px solid #48A74C" : "",
    backgroundColor: isDragging ? "white" : "",
  };

  useEffect(() => {
    if (isEditMode) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [isEditMode]);

  const handleClick = () => {
    if (isEditMode) return;
    setOpen(!open);
  };

  const startEditing = (item: any) => {
    setEditingId(item.id);
    setEditingTitle(item.title);
  };

  const saveEdit = () => {
    if (editingId) {
      updateItemTitle(editingId, editingTitle);
      setEditingId(null);
    }
  };

  const handleRouteNavigate = (clicked: NavItem) => {
    if (isEditMode || !clicked?.target) return;
    router.push(clicked?.target);
    setMobileSideNav(false);
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`w-full rounded-[4px] bg-main-grey ${
        !item.visible ? "opacity-50" : ""
      }`}
      onClick={(e) => {
        e.stopPropagation();
        handleRouteNavigate(item);
      }}
    >
      {isEditMode && editingId === item.id ? (
        <InputField
          withActionBtns
          value={editingTitle}
          onChangeHanlder={(e) => setEditingTitle(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") saveEdit();
            if (e.key === "Escape") setEditingId(null);
          }}
          closeBtnHandler={() => setEditingId(null)}
          saveBtnHandler={saveEdit}
        />
      ) : (
        <>
          <ListItemButton
            sx={{
              paddingX: "20px",
              ...btnStyles,
            }}
            // onClick={handleClick}
          >
            {isEditMode && (
              <div
                {...attributes}
                {...listeners}
                className="cursor-move mr-[6px]"
              >
                <DragIcon />
              </div>
            )}

            <ListItemText
              primary={item.title}
              slotProps={{
                primary: {
                  sx: {
                    color: "#404040",
                    fontSize: { xs: "17px", md: "24px" },
                  },
                },
              }}
            />
            {!isEditMode && item?.children && (
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  handleClick();
                }}
                className="p-[8px]"
              >
                <ArrowUp className={open ? "" : "rotate-90"} />
              </div>
            )}

            {isEditMode && editingId !== item.id && (
              <div className="flex gap-2">
                <div onClick={() => startEditing(item)}>
                  <EditIcon />
                </div>

                <div onClick={() => updateItemVisability(item.id)}>
                  {item.visible ? <EyeIcon /> : <EyeOffIcon />}
                </div>
              </div>
            )}
          </ListItemButton>
          {item?.children && item.children.length > 0 && (
            <SortableContext
              items={item.children}
              strategy={verticalListSortingStrategy}
            >
              <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {item?.children
                    ?.filter((y) => (isEditMode ? true : y?.visible))
                    .map((x: NavItem) => (
                      <NavSortableItem
                        key={x.id}
                        item={x}
                        isEditMode={isEditMode}
                        updateItemVisability={updateItemVisability}
                        updateItemTitle={updateItemTitle}
                        btnStyles={{ pl: 6 }}
                      />
                    ))}
                </List>
              </Collapse>
            </SortableContext>
          )}
        </>
      )}
    </div>
  );
};

export default NavSortableItem;
