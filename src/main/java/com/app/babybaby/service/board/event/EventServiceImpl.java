package com.app.babybaby.service.board.event;

import com.app.babybaby.domain.boardDTO.eventDTO.EventDTO;
import com.app.babybaby.domain.fileDTO.eventFileDTO.EventFileDTO;
import com.app.babybaby.domain.memberDTO.MemberDTO;
import com.app.babybaby.entity.board.event.Event;
import com.app.babybaby.entity.calendar.Calendar;
import com.app.babybaby.entity.embeddable.Address;
import com.app.babybaby.entity.file.eventFile.EventFile;
import com.app.babybaby.entity.member.Member;
import com.app.babybaby.repository.board.event.EventRepository;
import com.app.babybaby.repository.calendar.CalendarRepository;
import com.app.babybaby.repository.file.eventFile.EventFileRepository;
import com.app.babybaby.repository.member.member.MemberRepository;
import com.app.babybaby.search.board.parentsBoard.EventBoardSearch;
import com.app.babybaby.service.member.member.MemberService;
import com.app.babybaby.type.CategoryType;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.*;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collector;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Slf4j
public class EventServiceImpl implements EventService {

    private final EventRepository eventRepository;

    private final MemberRepository memberRepository;

    private final EventFileRepository eventFileRepository;

    private final CalendarRepository calendarRepository;


    @Override
    public Slice<EventDTO> findEventListWithPaging(EventBoardSearch eventBoardSearch, Pageable pageable) {
        Slice<Event> events = eventRepository.findEventListWithPaging_QueryDSL(eventBoardSearch, pageable);
        events.get().map(event -> event.toString()).forEach(log::info);

        List<EventDTO> collect = events.get().map(event -> eventToDTO(event)).collect(Collectors.toList());
//        List<EventDTO> collect = events.get().collect(Collectors.toList());
        return new SliceImpl<>(collect,pageable,events.hasNext());
    }

    public void saveAll(Long memberId, EventDTO eventDTO, Calendar calendar) {
        Member member = memberRepository.findById(memberId).orElseThrow(() -> new IllegalArgumentException("Invalid memberId: " + memberId));
        eventDTO.setCompany(this.memberToDTO(member));
        eventDTO.setCalendar(this.toCalendarDTO(calendar));
        log.info("내가 가져온 맴버: " + member);
        log.info("내가 가져온 Calendar: " + calendar);
        log.info(eventDTO.toString());

        Event event = this.toEventEntity(eventDTO);
        event.setCalendar(calendar); // calendar를 event와 연결

        List<EventFile> eventFiles = event.getEventFiles();
        if (eventFiles != null) {
            for (EventFile eventFile : eventFiles) {
                eventFile.setEvent(event); // eventFile을 event와 연결
            }
        }

        Event savedEvent = eventRepository.save(event);
        log.info("엔티티로 바뀐 eventFile은 " + savedEvent.getEventFiles().toString());
        log.info("엔티티로 바뀐 member는: " + savedEvent.getCompany());

        for (EventFile eventFile : eventFiles) {
            eventFile.setEvent(savedEvent); // eventFile에 외래 키 설정
            eventFileRepository.save(eventFile);
        }
    }


    @Override
    public Event createEvent(Event event) {
        return null;
    }

    @Override
    public Event updateEvent(Long eventId, Event updatedEvent) {
        return null;
    }

    @Override
    public void deleteEvent(Long eventId) {

    }

}
