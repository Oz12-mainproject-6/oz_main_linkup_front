/** 많이 수정해야 합니다 */
class Artist {
    constructor(
        id,
        name,
        debut_date,
        birthdate,
        img_face,
        img_torso,
        img_banner,
        is_group,
        group_name,
    ) {
        this.id = id;
        this.name = name;
        this.debut_date = debut_date;
        this.birthdate = birthdate;
        this.img_face = img_face;
        this.img_torso = img_torso;
        this.img_banner = img_banner;
        this.is_group = is_group;
        this.group_name = group_name;
    }
}

/** 많이 수정해야 합니다 */
export const artistArray = [
    new Artist(
        1,
        "Jisoo",
        "20160808",
        "19950103",
        "",
        "",
        "",
        true,
        "BLACKPINK",
    ),
    new Artist(
        2,
        "Jennie",
        "20160808",
        "19960116",
        "",
        "",
        "",
        true,
        "BLACKPINK",
    ),
    new Artist(
        3,
        "Rosé",
        "20160808",
        "19970211",
        "",
        "",
        "",
        true,
        "BLACKPINK",
    ),
    new Artist(
        4,
        "Lisa",
        "20160808",
        "19970327",
        "",
        "",
        "",
        true,
        "BLACKPINK",
    ),
    new Artist(5, "Winter", "20201117", "20010101", "", "", "", true, "aespa"),
    new Artist(6, "Karina", "20201117", "20000411", "", "", "", true, "aespa"),
    new Artist(7, "Giselle", "20201117", "20001030", "", "", "", true, "aespa"),
    new Artist(
        8,
        "Ningning",
        "20201117",
        "20021023",
        "",
        "",
        "",
        true,
        "aespa",
    ),
    new Artist(9, "RM", "20130613", "19940912", "", "", "", true, "BTS"),
    new Artist(10, "Jin", "20130613", "19921204", "", "", "", true, "BTS"),
    new Artist(11, "Suga", "20130613", "19930309", "", "", "", true, "BTS"),
    new Artist(12, "J-Hope", "20130613", "19940218", "", "", "", true, "BTS"),
    new Artist(13, "Jimin", "20130613", "19951013", "", "", "", true, "BTS"),
    new Artist(14, "V", "20130613", "19951230", "", "", "", true, "BTS"),
    new Artist(15, "Jungkook", "20130613", "19970901", "", "", "", true, "BTS"),
    new Artist(16, "IU", "20080918", "19930516", "", "", "", false, undefined),
    new Artist(
        17,
        "Taeyeon",
        "20071005",
        "19890309",
        "",
        "",
        "",
        false,
        undefined,
    ),
    new Artist(
        18,
        "G-Dragon",
        "20060819",
        "19880818",
        "",
        "",
        "",
        false,
        undefined,
    ),
    new Artist(
        19,
        "Chungha",
        "20170607",
        "19960209",
        "",
        "",
        "",
        false,
        undefined,
    ),
    new Artist(
        20,
        "Sunmi",
        "20070205",
        "19920502",
        "",
        "",
        "",
        false,
        undefined,
    ),
];

/** 많이 수정해야 합니다 */
export const dummyAgencyUser = {
    id: 1,
    agencyName: "cool and awesome agency",
    managingArtistArray: artistArray,
    role: "admin",
};

const makeDummyEvent = (
    artistId,
    artistName,
    sttime,
    edtime,
    title,
    description,
) => ({
    artistId,
    artistName,
    sttime,
    edtime,
    title,
    description,
});

export const dummyEventArray = [
    // September 5th - Multiple events
    makeDummyEvent(
        2,
        "아이유",
        new Date("2025-09-05T14:00:00"),
        new Date("2025-09-05T16:00:00"),
        "쇼케이스",
        "Love wins all 투어 서울 공연",
    ),
    makeDummyEvent(
        8,
        "BLACKPINK",
        new Date("2025-09-05T19:00:00"),
        new Date("2025-09-05T21:30:00"),
        "콘서트",
        "BORN PINK 월드투어 서울 공연",
    ),
    
    // September 12th - Multiple events
    makeDummyEvent(
        3,
        "BTS",
        new Date("2025-09-12T15:30:00"),
        new Date("2025-09-12T17:30:00"),
        "팬미팅",
        "ARMY와 함께하는 특별한 시간",
    ),
    makeDummyEvent(
        4,
        "NewJeans",
        new Date("2025-09-12T19:00:00"),
        new Date("2025-09-12T20:30:00"),
        "사인회",
        "Get Up 앨범 팬사인회",
    ),
    
    // September 15th
    makeDummyEvent(
        5,
        "이승기",
        new Date("2025-09-15T20:00:00"),
        new Date("2025-09-15T22:00:00"),
        "라이브 방송",
        "팬들과의 실시간 소통",
    ),
    
    // September 20th - Busy day with 4 events
    makeDummyEvent(
        6,
        "에스파",
        new Date("2025-09-20T10:00:00"),
        new Date("2025-09-20T12:00:00"),
        "모닝 쇼케이스",
        "신곡 'Supernova' 발표회",
    ),
    makeDummyEvent(
        7,
        "박보검",
        new Date("2025-09-20T14:30:00"),
        new Date("2025-09-20T16:00:00"),
        "팬미팅",
        "드라마 촬영 후기 공유",
    ),
    makeDummyEvent(
        12,
        "레드벨벳",
        new Date("2025-09-20T17:30:00"),
        new Date("2025-09-20T19:00:00"),
        "컴백 쇼케이스",
        "새 앨범 'Feel My Rhythm' 공개",
    ),
    makeDummyEvent(
        13,
        "차은우",
        new Date("2025-09-20T20:00:00"),
        new Date("2025-09-20T21:30:00"),
        "화보 촬영 비하인드",
        "팬들과 함께하는 특별 촬영",
    ),
    
    // September 25th - Multiple events
    makeDummyEvent(
        9,
        "임영웅",
        new Date("2025-09-25T18:00:00"),
        new Date("2025-09-25T20:30:00"),
        "콘서트",
        "IM HERO 전국투어 서울 공연",
    ),
    makeDummyEvent(
        10,
        "트와이스",
        new Date("2025-09-25T15:00:00"),
        new Date("2025-09-25T17:00:00"),
        "하이터치 이벤트",
        "ONCE와의 특별한 만남",
    ),
    
    // September 28th - Weekend events
    makeDummyEvent(
        11,
        "강다니엘",
        new Date("2025-09-28T16:30:00"),
        new Date("2025-09-28T18:00:00"),
        "온라인 팬미팅",
        "글로벌 팬들과의 화상 만남",
    ),
    makeDummyEvent(
        14,
        "스트레이 키즈",
        new Date("2025-09-28T19:30:00"),
        new Date("2025-09-28T21:30:00"),
        "월드투어 서울 콘서트",
        "CIRCUS 월드투어 한국 공연",
    ),
    
    // September 30th
    makeDummyEvent(
        15,
        "송혜교",
        new Date("2025-09-30T14:00:00"),
        new Date("2025-09-30T15:30:00"),
        "드라마 제작발표회",
        "새 작품 '더 글로리' 시즌2 발표",
    ),
];
