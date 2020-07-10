

$(document).on('scroll', function () {

    const windowHeight = $(window).height()
    const scrollValue = $(this).scrollTop();
   
    /* const $art1 = $('.art1');
    const art1FromTop = $art1.offset().top
    const art1Height = $art1.outerHeight()

    const $art2 = $('.art2');
    const art2FromTop = $art2.offset().top
    const art2Height = $art2.outerHeight()
    
    const $art3 = $('.art3');
    const art3FromTop = $art3.offset().top
    const art3Height = $art3.outerHeight()
    
    const $art4 = $('.art4');
    const art4FromTop = $art4.offset().top
    const art4Height = $art4.outerHeight()

    const $art5 = $('.art5');
    const art5FromTop = $art5.offset().top
    const art5Height = $art5.outerHeight()

        if (scrollValue > art1FromTop + art1Height - windowHeight)
        {
             $art1.addClass('active');
        }
        if (scrollValue > art2FromTop + art2Height - windowHeight)
        {
             $art2.addClass('active');
        }

        if (scrollValue > art3FromTop + art3Height - windowHeight)
        {
             $art3.addClass('active');
        }
        if (scrollValue > art4FromTop + art4Height - windowHeight)
        {
            $art4.addClass('active');
        }
        if (scrollValue > art5FromTop + art5Height - windowHeight)
        {
            $art5.addClass('active');
        } */
        //druga sekcja
        //pobieramy elementy op1 op2
        const $op1 = $('.op1');
        const $op2 = $('.op2');
        const $op3 = $('.op3');
        const $op4 = $('.op4');
        const $op5 = $('.op5');
        const $op6 = $('.op6');
        const $op7 = $('.op7');
        // nazwa zmienna wielkosc elementow od jego poczatku
        //offset zwraca nam wartosc gdzie jest element
        const op1FromTop = $op1.offset().top;
        const op2FromTop = $op2.offset().top;
        const op3FromTop = $op3.offset().top;
        const op4FromTop = $op4.offset().top;
        const op5FromTop = $op5.offset().top;
        const op6FromTop = $op6.offset().top;
        const op7FromTop = $op7.offset().top;
       
        
        const op1Height = $op1.outerHeight();
        const op2Height = $op2.outerHeight();
        const op3Height = $op3.outerHeight();
        const op4Height = $op4.outerHeight();
        const op5Height = $op5.outerHeight();
        const op6Height = $op6.outerHeight();
        const op7Height = $op7.outerHeight();
           

                if (scrollValue > op1FromTop + op1Height /2 - windowHeight )
                {
                    //DODAJEMY KLASE ACTIVE
                    $op1.addClass('active')
                    //sprawdzam gdzie dokladnie sie ma pokazuje
                    console.log('zalaczenie animacji op1');
                }
                if (scrollValue > op2FromTop + op1Height /2 - windowHeight )
                {
                    //DODAJEMY KLASE ACTIVE
                    $op2.addClass('active')
                    //sprawdzam gdzie dokladnie sie ma pokazuje
                    console.log('zalaczenie animacji op1');
                }
                if (scrollValue > op3FromTop + op2Height /2 - windowHeight )
                {
                    //DODAJEMY KLASE ACTIVE
                    $op3.addClass('active')
                    //sprawdzam gdzie dokladnie sie ma pokazuje
                    console.log('zalaczenie animacji op1');
                }
                if (scrollValue > op4FromTop + op3Height /2 - windowHeight )
                {
                    //DODAJEMY KLASE ACTIVE
                    $op4.addClass('active')
                    //sprawdzam gdzie dokladnie sie ma pokazuje
                    console.log('zalaczenie animacji op1');
                }
                if (scrollValue > op5FromTop + op4Height /2 - windowHeight )
                {
                    //DODAJEMY KLASE ACTIVE
                    $op5.addClass('active')
                    //sprawdzam gdzie dokladnie sie ma pokazuje
                    console.log('zalaczenie animacji op1');
                }
                if (scrollValue > op4FromTop + op3Height /2 - windowHeight )
                {
                    //DODAJEMY KLASE ACTIVE
                    $op3.addClass('active')
                    //sprawdzam gdzie dokladnie sie ma pokazuje
                    console.log('zalaczenie animacji op1');
                }
                if (scrollValue > op6FromTop + op5Height /2 - windowHeight )
                {
                    //DODAJEMY KLASE ACTIVE
                    $op6.addClass('active')
                    //sprawdzam gdzie dokladnie sie ma pokazuje
                    console.log('zalaczenie animacji op1');
                }
                if (scrollValue > op7FromTop + op7Height /2 - windowHeight )
                {
                    //DODAJEMY KLASE ACTIVE
                    $op7.addClass('active')
                    //sprawdzam gdzie dokladnie sie ma pokazuje
                    console.log('zalaczenie animacji op1');
                }

        //czysciciel
        if (scrollValue < 100) 
        {
            $('article').removeClass('active');
       }
})

