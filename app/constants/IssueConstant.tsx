type IssueStatus = {
    [key:string]:JSX.Element
};

export const issueStatus: IssueStatus = {
    OPEN:<div className="bg-red-200/60 text-red-600 px-3 py-[2px] rounded-sm font-semibold w-fit text-xs">open</div>,
    CLOSE:<div className="bg-green-200/60 text-green-600 px-3 py-[2px] rounded-sm font-semibold w-fit text-xs">close</div>,
    IN_PROGRESS:<div className="bg-yellow-200/60 text-yellow-600 px-3 py-[2px] rounded-sm font-semibold w-fit text-xs">inProgress</div>
};