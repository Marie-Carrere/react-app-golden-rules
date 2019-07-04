import React from 'react'
import { shallow } from 'enzyme'
import Rule from './Rule'
import { tsImportEqualsDeclaration } from '@babel/types';
import { get } from 'http';

// TODO: verifier qu'il y est un titre (s'appuyer sur les selecteurs css) find sur du shallow 
describe('Rule component', () => {
    let props;
    let wrapper;
    
    beforeEach(() => {
        props = {
            rule: {
                id: 1,
                title: 'lorem ipsum',
                description: 'lorem ipsum',
                tags: [],
                likes: 0,
                dislikes: 0
            }
        }
        wrapper = shallow(<Rule {...props}/>)
    })
    

    it('should display rule title', () => {
        const titles = wrapper.find('.panel-heading')
        expect(titles.length).toBe(1);
        expect(titles.text()).toEqual(props.rule.title);
    })

    it('should hide description when title is clikcked', () => {
        expect(wrapper.find('.panel-body').length).toBe(1)
        wrapper.find('.panel-heading').simulate('click')
        expect(wrapper.find('.panel-body').length).toBe(0)
    })

})

