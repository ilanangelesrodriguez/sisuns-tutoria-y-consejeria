import { Checkbox, User, Link, Card } from '@nextui-org/react';
import {Divider} from "@nextui-org/divider";
const StudentSelection = () => {
  return (
    <div className="p-2 border border-gray-300 w-full rounded-lg shadow-0 border-0">
      <div className='flex flex-row' style={{justifyContent: 'space-between'}}>
        <h4 className='font-bold'>Estudiantes:</h4>
        <Checkbox className="mb-2">TODOS</Checkbox>
      </div>
      <Divider className="my-4" />
      <div className="flex flex-col border-0">
        <Card className="flex items-center mb-2 flex-row p-5">
          <Checkbox className="mr-2" />
            <User   
              name="Junior Garcia"
              description={(
                <Link href="https://twitter.com/jrgarciadev" size="sm" isExternal>
                  0202114004
                </Link>
              )}
              avatarProps={{
                src: "https://avatars.githubusercontent.com/u/30373425?v=4"
            }}
          />
        </Card>
        <Card className="flex items-center mb-2 flex-row p-5">
          <Checkbox className="mr-2" />
            <User   
              name="Junior Garcia"
              description={(
                <Link href="https://twitter.com/jrgarciadev" size="sm" isExternal>
                  0202114004
                </Link>
              )}
              avatarProps={{
                src: "https://avatars.githubusercontent.com/u/30373425?v=4"
            }}
          />
        </Card>
        <Card className="flex items-center mb-2 flex-row p-5 ">
          <Checkbox className="mr-2" />
            <User   
              name="Junior Garcia"
              description={(
                <Link href="https://twitter.com/jrgarciadev" size="sm" isExternal>
                  0202114004
                </Link>
              )}
              avatarProps={{
                src: "https://avatars.githubusercontent.com/u/30373425?v=4"
            }}
          />
        </Card>
      </div>
    </div>
  );
};

export default StudentSelection;
