<template>
  <DefaultBreadcrumb title="Leadership Team"></DefaultBreadcrumb>
  <div class="our-team">
    <div class="team-group">
      <TeamMemberCard
        v-for="teamMember in teamMembers.directors"
        :key="teamMember.name"
        :image="teamMember.image"
        :name="teamMember.name"
        :position="teamMember.position"
        :description="teamMember.description"
      ></TeamMemberCard>
    </div>
    <div class="team-group">
      <TeamMemberCard
        v-for="teamMember in teamMembers.employees"
        :key="teamMember.name"
        :image="teamMember.image"
        :name="teamMember.name"
        :position="teamMember.position"
        :description="teamMember.description"
      ></TeamMemberCard>
    </div>
  </div>
</template>

<script setup lang="ts">
import DefaultBreadcrumb from './DefaultBreadcrumb.vue'
import TeamMemberCard from './TeamMemberCard.vue'
import { teamMembers } from './teamMembers'
</script>

<style lang="css" scoped>
.our-team {
  background-color: var(--light);
  padding-left: var(--default-padding);
  padding-right: var(--default-padding);
  padding-top: 32px;
  padding-bottom: 32px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.team-group {
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: center;
  align-items: center;
}

@media only screen and (min-width: 768px) {
  .our-team {
    padding-top: 5vw;
    padding-bottom: calc(5vw + 20px);
  }
  .team-group {
    flex-direction: row;
  }
}
</style>
