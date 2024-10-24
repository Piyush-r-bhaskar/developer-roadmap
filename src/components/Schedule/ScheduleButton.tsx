import { Calendar } from 'lucide-react';
import { cn } from '../../lib/classname';
import type { ResourceType } from '../../lib/resource-progress';
import { ScheduleEventModal } from './ScheduleEventModal';
import { useState } from 'react';

type ScheduleButtonProps = {
  resourceId: string;
  resourceType: ResourceType;
  resourceTitle: string;
};

export function ScheduleButton(props: ScheduleButtonProps) {
  const { resourceId, resourceType, resourceTitle } = props;

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {isModalOpen && (
        <ScheduleEventModal
          onClose={() => {
            setIsModalOpen(false);
          }}
          roadmapId={resourceId}
          roadmapTitle={resourceTitle}
        />
      )}

      <button
        className={cn(
          'group inline-flex items-center gap-1.5 border-b-2 border-b-transparent px-2 pb-2.5 text-sm font-normal text-gray-400 transition-colors hover:text-gray-700',
        )}
        onClick={() => {
          setIsModalOpen(true);
        }}
      >
        <Calendar className="h-4 w-4 flex-shrink-0" />
        <span className="hidden sm:inline">Schedule</span>
      </button>
    </>
  );
}