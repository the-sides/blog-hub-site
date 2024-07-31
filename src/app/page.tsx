import {Pump} from '../../.basehub/react-pump'
import { draftMode } from "next/headers"

const Page = () => {
  return (
    <Pump
      queries={[{
        blog: {
          posts: {
            items: {
              _title: true
            }
          }
        }
      },]}
      draft={draftMode().isEnabled}
      next={{ revalidate: 30 }}
    >
      {async ([data]) => {
        "use server"

        return (
          <pre>
            <code>{JSON.stringify(data, null, 2)}</code>
          </pre>
        )
      }}
    </Pump>
  )
}

export default Page