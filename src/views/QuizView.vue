<script setup lang="ts">
import { ref, computed } from 'vue'
import { Trophy, Timer, Check, Close } from '@element-plus/icons-vue'

interface Question {
  id: number
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
}

const questions: Question[] = [
  {
    id: 1,
    question: '中国有多少个民族？',
    options: ['54个', '55个', '56个', '57个'],
    correctAnswer: 2,
    explanation: '中国共有56个民族，其中汉族人口最多，其他55个为少数民族。'
  },
  {
    id: 2,
    question: '蒙古族的传统节日是什么？',
    options: ['春节', '那达慕大会', '泼水节', '火把节'],
    correctAnswer: 1,
    explanation: '那达慕大会是蒙古族的传统节日，每年夏季举行，包括摔跤、赛马、射箭等活动。'
  },
  {
    id: 3,
    question: '藏族的标志性建筑是什么？',
    options: ['蒙古包', '吊脚楼', '布达拉宫', '四合院'],
    correctAnswer: 2,
    explanation: '布达拉宫位于西藏拉萨，是藏传佛教的圣地，也是藏族建筑的杰出代表。'
  },
  {
    id: 4,
    question: '壮族人口最多的少数民族，主要分布在哪里？',
    options: ['广西壮族自治区', '云南省', '贵州省', '四川省'],
    correctAnswer: 0,
    explanation: '壮族主要分布在广西壮族自治区，是中国人口最多的少数民族。'
  },
  {
    id: 5,
    question: '维吾尔族的传统音乐形式是什么？',
    options: ['长调', '十二木卡姆', '侗族大歌', '花儿'],
    correctAnswer: 1,
    explanation: '十二木卡姆是维吾尔族的传统音乐形式，被联合国教科文组织列为世界非物质文化遗产。'
  },
  {
    id: 6,
    question: '苗族最具代表性的工艺品是什么？',
    options: ['唐卡', '银饰', '刺绣', '蜡染'],
    correctAnswer: 1,
    explanation: '苗族银饰工艺精湛，是苗族文化的重要标志，在节日盛装中必不可少。'
  },
  {
    id: 7,
    question: '回族的主要宗教信仰是什么？',
    options: ['佛教', '道教', '伊斯兰教', '基督教'],
    correctAnswer: 2,
    explanation: '回族信仰伊斯兰教，这也是回族文化形成的重要基础。'
  },
  {
    id: 8,
    question: '彝族最著名的传统节日是什么？',
    options: ['三月三', '火把节', '泼水节', '龙舟节'],
    correctAnswer: 1,
    explanation: '火把节是彝族最盛大的传统节日，一般在农历六月二十四举行。'
  },
  {
    id: 9,
    question: '朝鲜族的传统美食是什么？',
    options: ['手抓饭', '冷面', '酥油茶', '糌粑'],
    correctAnswer: 1,
    explanation: '冷面是朝鲜族的传统美食，以荞麦面为主料，配以牛肉汤和各种配菜。'
  },
  {
    id: 10,
    question: '侗族最著名的非物质文化遗产是什么？',
    options: ['侗族大歌', '长调', '呼麦', '花儿'],
    correctAnswer: 0,
    explanation: '侗族大歌是侗族的多声部民歌，被联合国教科文组织列为世界非物质文化遗产。'
  }
]

const currentQuestionIndex = ref(0)
const selectedAnswer = ref<number | null>(null)
const score = ref(0)
const showResult = ref(false)
const answers = ref<{ questionId: number; selected: number; correct: boolean }[]>([])

const currentQuestion = computed(() => questions[currentQuestionIndex.value])
const progress = computed(() => ((currentQuestionIndex.value + 1) / questions.length) * 100)
const isLastQuestion = computed(() => currentQuestionIndex.value === questions.length - 1)

const selectAnswer = (index: number) => {
  if (selectedAnswer.value !== null) return
  selectedAnswer.value = index

  const isCorrect = index === currentQuestion.value.correctAnswer
  if (isCorrect) {
    score.value += 10
  }

  answers.value.push({
    questionId: currentQuestion.value.id,
    selected: index,
    correct: isCorrect
  })
}

const nextQuestion = () => {
  if (isLastQuestion.value) {
    showResult.value = true
  } else {
    currentQuestionIndex.value++
    selectedAnswer.value = null
  }
}

const restartQuiz = () => {
  currentQuestionIndex.value = 0
  selectedAnswer.value = null
  score.value = 0
  showResult.value = false
  answers.value = []
}

const getScoreLevel = () => {
  if (score.value >= 90) return { level: '民族专家', color: '#4CAF50' }
  if (score.value >= 70) return { level: '民族文化爱好者', color: '#2196F3' }
  if (score.value >= 50) return { level: '民族文化学习者', color: '#FF9800' }
  return { level: '民族文化初学者', color: '#9E9E9E' }
}
</script>

<template>
  <div class="quiz-view">
    <div class="container">
      <!-- Header -->
      <div class="quiz-header">
        <h1 class="quiz-title">
          <span class="title-icon">🎮</span>
          民族文化知识闯关
        </h1>
        <p class="quiz-subtitle">测试你对中华民族文化的了解程度</p>
      </div>

      <!-- Quiz Content -->
      <div v-if="!showResult" class="quiz-content">
        <!-- Progress Bar -->
        <div class="progress-section">
          <div class="progress-info">
            <span class="progress-text">题目 {{ currentQuestionIndex + 1 }} / {{ questions.length }}</span>
            <span class="score-text">得分: {{ score }}</span>
          </div>
          <el-progress :percentage="progress" :stroke-width="8" :show-text="false" />
        </div>

        <!-- Question Card -->
        <div class="question-card">
          <div class="question-number">第 {{ currentQuestionIndex + 1 }} 题</div>
          <h2 class="question-text">{{ currentQuestion.question }}</h2>

          <div class="options-list">
            <button
              v-for="(option, index) in currentQuestion.options"
              :key="index"
              :class="[
                'option-btn',
                {
                  selected: selectedAnswer === index,
                  correct: selectedAnswer !== null && index === currentQuestion.correctAnswer,
                  wrong: selectedAnswer === index && index !== currentQuestion.correctAnswer
                }
              ]"
              :disabled="selectedAnswer !== null"
              @click="selectAnswer(index)"
            >
              <span class="option-label">{{ ['A', 'B', 'C', 'D'][index] }}</span>
              <span class="option-text">{{ option }}</span>
              <el-icon v-if="selectedAnswer !== null && index === currentQuestion.correctAnswer" class="option-icon correct">
                <Check />
              </el-icon>
              <el-icon v-if="selectedAnswer === index && index !== currentQuestion.correctAnswer" class="option-icon wrong">
                <Close />
              </el-icon>
            </button>
          </div>

          <!-- Explanation -->
          <div v-if="selectedAnswer !== null" class="explanation">
            <div class="explanation-header">
              <el-icon :class="selectedAnswer === currentQuestion.correctAnswer ? 'correct' : 'wrong'">
                <component :is="selectedAnswer === currentQuestion.correctAnswer ? Check : Close" />
              </el-icon>
              <span :class="selectedAnswer === currentQuestion.correctAnswer ? 'correct' : 'wrong'">
                {{ selectedAnswer === currentQuestion.correctAnswer ? '回答正确！' : '回答错误' }}
              </span>
            </div>
            <p class="explanation-text">{{ currentQuestion.explanation }}</p>
          </div>

          <!-- Next Button -->
          <div v-if="selectedAnswer !== null" class="action-area">
            <el-button type="primary" size="large" @click="nextQuestion">
              {{ isLastQuestion ? '查看结果' : '下一题' }}
              <el-icon class="el-icon--right"><ArrowRight /></el-icon>
            </el-button>
          </div>
        </div>
      </div>

      <!-- Result Screen -->
      <div v-else class="result-screen">
        <div class="result-card">
          <div class="result-icon">🏆</div>
          <h2 class="result-title">闯关完成！</h2>
          <div class="result-score">
            <span class="score-number">{{ score }}</span>
            <span class="score-total">/ {{ questions.length * 10 }}</span>
          </div>
          <div class="result-level" :style="{ color: getScoreLevel().color }">
            {{ getScoreLevel().level }}
          </div>

          <div class="result-stats">
            <div class="stat-item">
              <span class="stat-value">{{ answers.filter(a => a.correct).length }}</span>
              <span class="stat-label">正确</span>
            </div>
            <div class="stat-item">
              <span class="stat-value">{{ answers.filter(a => !a.correct).length }}</span>
              <span class="stat-label">错误</span>
            </div>
            <div class="stat-item">
              <span class="stat-value">{{ Math.round((answers.filter(a => a.correct).length / questions.length) * 100) }}%</span>
              <span class="stat-label">正确率</span>
            </div>
          </div>

          <div class="result-actions">
            <el-button type="primary" size="large" @click="restartQuiz">
              再试一次
            </el-button>
            <el-button size="large" @click="$router.push('/nations')">
              探索更多民族文化
            </el-button>
          </div>
        </div>

        <!-- Answer Review -->
        <div class="review-section">
          <h3 class="review-title">答案回顾</h3>
          <div class="review-list">
            <div
              v-for="(answer, index) in answers"
              :key="index"
              :class="['review-item', answer.correct ? 'correct' : 'wrong']"
            >
              <div class="review-header">
                <span class="review-number">第 {{ index + 1 }} 题</span>
                <el-icon class="review-status">
                  <component :is="answer.correct ? Check : Close" />
                </el-icon>
              </div>
              <p class="review-question">{{ questions.find(q => q.id === answer.questionId)?.question }}</p>
              <p class="review-answer">
                正确答案: {{ questions.find(q => q.id === answer.questionId)?.options[questions.find(q => q.id === answer.questionId)!.correctAnswer] }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.quiz-view {
  padding-top: 64px;
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.container {
  max-width: 800px;
  margin: 0 auto;
  padding: var(--spacing-xl) var(--spacing-md);
}

.quiz-header {
  text-align: center;
  color: white;
  margin-bottom: var(--spacing-xl);

  .quiz-title {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: var(--spacing-sm);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--spacing-sm);

    .title-icon {
      font-size: 2.5rem;
    }
  }

  .quiz-subtitle {
    font-size: 1.1rem;
    opacity: 0.9;
  }
}

.quiz-content {
  .progress-section {
    background: white;
    padding: var(--spacing-md);
    border-radius: var(--radius-lg);
    margin-bottom: var(--spacing-md);

    .progress-info {
      display: flex;
      justify-content: space-between;
      margin-bottom: var(--spacing-sm);

      .progress-text {
        font-weight: 500;
        color: var(--text-primary);
      }

      .score-text {
        font-weight: 600;
        color: var(--primary-color);
      }
    }
  }

  .question-card {
    background: white;
    border-radius: var(--radius-lg);
    padding: var(--spacing-xl);
    box-shadow: var(--shadow-lg);

    .question-number {
      font-size: 0.875rem;
      color: var(--text-secondary);
      margin-bottom: var(--spacing-sm);
    }

    .question-text {
      font-size: 1.25rem;
      font-weight: 600;
      margin-bottom: var(--spacing-lg);
      line-height: 1.5;
    }

    .options-list {
      display: flex;
      flex-direction: column;
      gap: var(--spacing-md);
      margin-bottom: var(--spacing-lg);

      .option-btn {
        display: flex;
        align-items: center;
        gap: var(--spacing-md);
        padding: var(--spacing-md);
        background: var(--background-color);
        border: 2px solid transparent;
        border-radius: var(--radius-md);
        cursor: pointer;
        transition: all var(--transition-fast);
        text-align: left;

        &:hover:not(:disabled) {
          border-color: var(--primary-color);
          background: white;
        }

        &.selected {
          border-color: var(--primary-color);
          background: white;
        }

        &.correct {
          border-color: #4CAF50;
          background: #E8F5E9;
        }

        &.wrong {
          border-color: #F44336;
          background: #FFEBEE;
        }

        &:disabled {
          cursor: not-allowed;
        }

        .option-label {
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--primary-color);
          color: white;
          border-radius: var(--radius-full);
          font-weight: 600;
          flex-shrink: 0;
        }

        .option-text {
          flex: 1;
          font-size: 1rem;
        }

        .option-icon {
          font-size: 1.5rem;

          &.correct {
            color: #4CAF50;
          }

          &.wrong {
            color: #F44336;
          }
        }
      }
    }

    .explanation {
      background: #E3F2FD;
      border-radius: var(--radius-md);
      padding: var(--spacing-md);
      margin-bottom: var(--spacing-lg);

      .explanation-header {
        display: flex;
        align-items: center;
        gap: var(--spacing-sm);
        margin-bottom: var(--spacing-sm);
        font-weight: 600;

        .correct {
          color: #4CAF50;
        }

        .wrong {
          color: #F44336;
        }
      }

      .explanation-text {
        color: var(--text-secondary);
        line-height: 1.6;
      }
    }

    .action-area {
      text-align: center;
    }
  }
}

.result-screen {
  .result-card {
    background: white;
    border-radius: var(--radius-lg);
    padding: var(--spacing-xxl);
    text-align: center;
    box-shadow: var(--shadow-lg);
    margin-bottom: var(--spacing-xl);

    .result-icon {
      font-size: 4rem;
      margin-bottom: var(--spacing-md);
    }

    .result-title {
      font-size: 1.75rem;
      font-weight: 600;
      margin-bottom: var(--spacing-lg);
    }

    .result-score {
      margin-bottom: var(--spacing-md);

      .score-number {
        font-size: 4rem;
        font-weight: 700;
        color: var(--primary-color);
      }

      .score-total {
        font-size: 1.5rem;
        color: var(--text-secondary);
      }
    }

    .result-level {
      font-size: 1.25rem;
      font-weight: 600;
      margin-bottom: var(--spacing-xl);
    }

    .result-stats {
      display: flex;
      justify-content: center;
      gap: var(--spacing-xl);
      margin-bottom: var(--spacing-xl);

      .stat-item {
        text-align: center;

        .stat-value {
          display: block;
          font-size: 1.5rem;
          font-weight: 600;
          color: var(--text-primary);
        }

        .stat-label {
          font-size: 0.875rem;
          color: var(--text-secondary);
        }
      }
    }

    .result-actions {
      display: flex;
      gap: var(--spacing-md);
      justify-content: center;
      flex-wrap: wrap;
    }
  }

  .review-section {
    background: white;
    border-radius: var(--radius-lg);
    padding: var(--spacing-xl);
    box-shadow: var(--shadow-lg);

    .review-title {
      font-size: 1.25rem;
      font-weight: 600;
      margin-bottom: var(--spacing-lg);
    }

    .review-list {
      display: flex;
      flex-direction: column;
      gap: var(--spacing-md);

      .review-item {
        padding: var(--spacing-md);
        border-radius: var(--radius-md);
        border-left: 4px solid;

        &.correct {
          background: #E8F5E9;
          border-color: #4CAF50;
        }

        &.wrong {
          background: #FFEBEE;
          border-color: #F44336;
        }

        .review-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: var(--spacing-sm);

          .review-number {
            font-weight: 600;
            color: var(--text-primary);
          }

          .review-status {
            font-size: 1.25rem;
          }
        }

        .review-question {
          color: var(--text-primary);
          margin-bottom: var(--spacing-xs);
        }

        .review-answer {
          font-size: 0.875rem;
          color: #4CAF50;
          font-weight: 500;
        }
      }
    }
  }
}
</style>
